<template>
    <div class="tooltip" :class="tooltipPosition" @mousedown="update()">
        <div class="icon" ref="icon">
            <slot name="head">
                <!-- <svg width="3" height="10" viewBox="0 0 3 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.919219 2.12356H2.94722V0.503557H0.919219V2.12356ZM0.895219 9.08356H2.97122V2.90356H0.895219V9.08356Z" />
                </svg> -->
                i
            </slot>
        </div>

        <div class="content" ref="tooltip">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
import '../styles/vars.less'

export default {
    name: 'WTooltip',
    props: {
        width: {
            type: Number,
            default: 200
        },
        background: {
            type: [String, Number],
            default: ''
        },
        fontColor: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            iconPosition: {
                y: 0,
                x: 0
            },
            tooltipSize: {
                width: 0,
                height: 0
            }
        }
    },
    computed: {
        tooltipPosition() {
            return {
                '-left': this.iconPosition.x > (window.innerWidth / 2) && (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0 && (this.width / 2) > (window.innerWidth - this.iconPosition.x),
                '-right': this.iconPosition.x < (window.innerWidth / 2) && (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0 && this.iconPosition.x < this.width / 2 ,
                '-center': (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0,
                '-top': this.iconPosition.y > (window.innerHeight / 2) && window.innerHeight - this.iconPosition.y < this.tooltipSize.height,
                '-text': this.$slots['head']
            }
        }
    },
    methods: {
        update() {
            this.iconPosition = {
                y: this.$refs.icon.getBoundingClientRect().y,
                x: this.$refs.icon.getBoundingClientRect().x
            }
            this.tooltipSize = {
                width: this.width,
                height: this.$refs.tooltip.offsetHeight + 35
            }
        }
    },
    mounted() {
        this.update()

        window.addEventListener('resize', this.update)
        window.addEventListener('scroll', this.update)

        if (this.background) {
            this.$refs.tooltip.style.setProperty('--tooltip-background-color', this.background)
        }

        if (this.width) {
            this.$refs.tooltip.style.setProperty('--width', this.width.toString() + 'px')
        }

        if (this.fontColor) {
            this.$refs.tooltip.style.setProperty('--tooltip-color', this.fontColor)
        }

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.update)
        window.removeEventListener('scroll', this.update)
    }
}
</script>

<style lang="less" scoped>
.tooltip {
    z-index: 1;
    display: inline-block;
    position: relative;


    .content {
        --tooltip-background-color: var(--white);
        --tooltip-color: var(--dark-blue);
        --width: 200px;

        box-shadow: 0px 20px 40px var(--dark-blue-20);
        color: var(--tooltip-color);
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        background-color: var(--tooltip-background-color);
        width: var(--width);
        z-index: 1;
        position: absolute;
        top: 30px;
        left: calc(12px - (var(--width) / 2));
        font-size: 11px;
        line-height: 144%;
        font-weight: 400;
        transform: scale(0);
        transition: all 0.2s;

        &::before {
            content: '';
            position: absolute;
            transform: rotate(180deg);
            left: calc(50% - 10px);
            top: -16px;
            border: 10px solid transparent;
            border-top: 10px solid var(--tooltip-background-color);
        }

        &:hover {
            transform: scale(1);

            ~ .icon {
                background-color: #667699;

                > svg {
                    > path {
                        fill: var(--white);
                    }
                }
            }
        }
    }

    .icon {
        width: 19px;
        height: 19px;
        flex-grow: 0;
        flex-shrink: 0;
        // align-self: center;
        color: var(--dark-blue) !important;
        border-radius: 100%;
        text-align: center;
        line-height: 18px;
        background-color: var(--dark-blue-10);
        margin: 0 3px;
        cursor: pointer;
        font-weight: 700;
        font-size: 12px;
        line-height: 19px;

        &:hover {
            background-color: #667699;

            > svg {
                > path {
                    fill: var(--white);
                }
            }

            ~ .content {
                transform: scale(1);
            }
        }
    }

    &.-left {
        .content {
            left: auto;
            right: -5px;

            &::before {
                left: calc(100% - 27px);
            }
        }
    }

    &.-right {
        .content {
            right: auto;
            left: -5px;

            &::before {
                left: 7px;
            }
        }
    }

    &.-top {
        .content {
            top: auto;
            bottom: 26px;

            &::before {
                transform: rotate(0deg);
                top: auto;
                bottom: -16px;
            }
        }
    }

    &.-text {
        > .icon {
            width: auto;
            height: auto;
            background: none;
            margin: 0;
        }
    }
}

@media (max-width: 768px) {
    .tooltip {

        &.-left {
            .content {
                left: auto;
                right: -5px;

                &::before {
                    left: calc(100% - 27px);
                }
            }
        }

        &.-right {
            .content {
                right: auto;
                left: -5px;

                &::before {
                    left: 7px;
                }
            }
        }

        &.-top {
            .content {
                top: auto;
                bottom: 26px;

                &::before {
                    transform: rotate(0deg);
                    top: auto;
                    bottom: -16px;
                }
            }
        }
    }
}
</style>
