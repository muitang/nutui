<template>
  <view :class="classes" @click="onClick" :style="style">
    <view class="switch-button">
      <view v-show="!modelValue" class="close-line"></view>
      <template v-if="activeText">
        <view class="nut-switch-label open" v-show="modelValue">{{
          activeText
        }}</view>
        <view class="nut-switch-label close" v-show="!modelValue">{{
          inactiveText
        }}</view>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('switch');

export default create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.modelValue ? 'switch-open' : 'switch-close']: true,
        [`${prefixCls}-disable`]: props.disable,
        [`${prefixCls}-base`]: true
      };
    });

    const style = computed(() => {
      return {
        backgroundColor: props.modelValue
          ? props.activeColor
          : props.inactiveColor
      };
    });

    const onClick = (event: Event) => {
      if (props.disable) return;
      emit('update:modelValue', !props.modelValue);
      emit('change', !props.modelValue, event);
    };

    return {
      classes,
      style,
      onClick
    };
  }
});
</script>
