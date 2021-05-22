<template>
  <button
    class="px-3 py-1 text-white rounded-md text-sm focus:outline-none transition-colors duration-150"
    :class="[`bg-${buttonFlatColor}-600`, `hover:bg-${buttonFlatColor}-700`]"
    :type="buttonType"
    @click="emitClickEvt"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
})
export default class ButtonRoundMd extends Vue {
  @Prop({ type: String, required: false, default: 'button', })
  buttonType!: String

  @Prop({ type: String, required: true, default: '', })
  buttonText!: String

  @Prop({ type: String, required: false, default: 'green', })
  buttonFlatColor!: String

  emitClickEvt() {
    this.$emit('emitClickEvt')
  }
}
</script>