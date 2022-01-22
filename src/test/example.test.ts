// mountメソッドをインポート
import { mount } from "@vue/test-utils";
import Component from "@/components/Component.vue";

it("Componentをマウント", () => {
  const wrapper = mount(Component);

  // h1要素のテキストが"Component"と等しいか確認
  expect(wrapper.get("h1").text()).toBe("Component");
  // p要素のテキストが"子コンポーネントです"と等しいか確認
  expect(wrapper.get("p").text()).toBe("子コンポーネントです");
});
