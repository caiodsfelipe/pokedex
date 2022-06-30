import { mount } from '@vue/test-utils'
import App from "@/App.vue";

// NÃO FOI FINALIZADO
describe('App.vue', () => {
  it('Check error message display', () => {
    const wrapper = mount(App);

    wrapper.vm.errorTrue();

    expect(wrapper.text()).toContain("Ops");
  })
})
