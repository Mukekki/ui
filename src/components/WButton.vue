<template>
    <a v-if="href.length" :href="href" class="btn" :class="btnClasses" :target="target ? '' : '_blank'" :disabled='disabled' @click="click">
        <slot></slot>
    </a>

    <router-link v-else-if="!isEmpty(to)" class="btn" :to="to" :class="btnClasses" :disabled='disabled' @click="click">
        <slot></slot>
    </router-link>

    <button v-else class="btn" :class="btnClasses" :disabled='disabled' @click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'w-button',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'middle'
        },
        block: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        to: {
            type: Object,
            default: () => {
                return {}
            }
        },
        href: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: ''
        }
    },
    computed: {
        btnClasses() {
            return {
                '-gray': this.type === 'gray',
                '-orange': this.type === 'orange',
                '-blue': this.type === 'blue',
                '-border': this.type === 'border',
                '-white-border': this.type === 'white-border',
                '-promo': this.type === 'promo',
                '-green': this.type === 'green',
                '-promo-border': this.type === 'promo-border',

                '-large': this.size === 'large',
                '-middle': this.size === 'middle',
                '-small': this.size === 'small',
                '-xs': this.size === 'xs',

                '-block': this.block
            }
        }
    },
    methods: {
        click(event) {
            this.$emit('click', event)
        },
        isEmpty(value) {
            if (value === null) {
                return true
            } else if (typeof value === 'object') {
                return Object.keys(value).length === 0
            } else if (typeof value === 'string') {
                return value.length === 0
            } else if (typeof value === 'number') {
                return false
            } else {
                return !Boolean(value)
            }
        },
    }
}
</script>

<style lang="less" scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    border-radius: 100px;
    border: none;
    font-family: 'Poppins';
    transition: all 0.2s;
    cursor: pointer;

    &.-large {
        padding: 16px 45px;
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        height: 60px;
    }

    &.-middle {
        padding: 13px 35px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        height: 50px;
    }

    &.-small {
        padding: 10px 20px;
        font-weight: 600;
        font-size: 13px;
        line-height: 20px;
        height: 40px;
    }

    &.-xs {
        padding: 9px 20px;
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        height: 35px;
    }

    &.-block {
        display: flex;
        width: 100%;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &.-gray {
        font-weight: 500;
        color: var(--dark-blue);
        background: var(--light-gray);

        &:hover {
            background: var(--light-gray-hover);
        }

        &:active {
            background: var(--light-gray-hover);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            background: var(--light-gray);
        }
    }

    &.-orange {
        color: var(--white);
        background: var(--orange-gradient);

        &:hover {
            background: var(--orange-gradient-hover);
        }

        &:active {
            background: var(--orange-gradient-hover);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            background: var(--orange-gradient);
        }
    }

    &.-promo {
        color: var(--white);
        background: var(--promo-gradient);

        &:hover {
            background: var(--promo-gradient-hover);
        }

        &:active {
            background: var(--promo-gradient-hover);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            background: var(--promo-gradient);
        }
    }

    &.-blue {
        color: var(--white);
        background: var(--blue-link);

        &:hover {
            background: var(--blue-link-hover);
        }

        &:active {
            background: var(--blue-link-hover);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            background: var(--blue-link)
        }
    }

    &.-green {
        color: var(--white);
        background: var(--green);

        &:hover {
            background: #7aeb24;
        }

        &:active {
            background: var(7aeb24);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            background: var(--green)
        }
    }

    &.-border {
        background: none;
        color: var(--dark-blue);
        border: 1px solid var(--dark-blue-purple-20);
        font-weight: 500 !important;
        box-sizing: border-box;

        &:hover {
            border: 1px solid var(--dark-blue-purple-40);
        }

        &:active {
            border: 1px solid var(--dark-blue-purple-40);
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        }

        &:disabled:hover {
            border: 1px solid var(dark-blue-purple-20);
        }
    }

    &.-white-border {
        background: none;
        color: var(--white);
        border: 1px solid var(--white-20);
        font-weight: 500;
        box-sizing: border-box;

        &:hover {
            border: 1px solid var(--white-60);
        }

        &:active {
            border: 1px solid var(--white-60);
            box-shadow: inset 0px 2px 2px rgba(256, 256, 256, 0.2);
        }

        &:disabled:hover {
            border: 1px solid var(--white-20);
        }
    }

    &.-promo-border {
        background: none;
        color: var(--white);
        font-weight: 500;
        box-sizing: border-box;
        border: 2px solid #E4748B;
        position:relative;

        &:hover {
            border: 2px solid #fc4a6e;
        }
    }
}
</style>
