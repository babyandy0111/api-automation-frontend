<template>
  <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
    <form @submit.prevent="onSubmit">
      <label class="block my-2">
        <p class="text-xs font-medium text-gray-500 uppercase">Email</p>
        <ValidationProvider name="email" rules="required|email">
          <input
            class="my-2 w-full px-4 py-2 rounded-md border-2 border-cool-gray-3 outline-none focus:border-green-600 transition-all duration-150"
            type="email"
          />
        </ValidationProvider>
      </label>
      <label class="block my-2">
        <p class="text-xs font-medium text-gray-500 uppercase">Password</p>
        <ValidationProvider name="password" rules="required|password">
          <input
            class="my-2 w-full px-4 py-2 rounded-md border-2 border-cool-gray-3 outline-none focus:border-green-600 transition-all duration-150"
            type="password"
          />
        </ValidationProvider>
      </label>
      <ButtonRoundMd
        class="my-4 py-2 px-4 text-center w-full"
        :buttonText="buttonText"
        buttonType="submit"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  layout: 'Empty',
})
export default class HomePage extends Vue {
  buttonText: string = 'Login';

  onSubmit() {
    this.$store.commit('app/SET_TOKEN', true);
    this.$router.push({ name: 'database-list' });
  }
}
</script>
