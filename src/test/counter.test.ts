import { render, fireEvent } from "@testing-library/vue";
import Counter from "../components/Counter.vue";

test("increments value on click", async () => {
  // renderメソッドは、コンポーネントに問い合わせるためのユーティリティのコレクションを返します。
  const { getByText } = render(Counter);

  // getByTextは、与えられたテキストに最初にマッチするノードを返します。
  // 一致する要素がない場合、あるいは一致する要素が複数ある場合にエラーを投げます。
  getByText("Times clicked: 0");

  const button = getByText("increment");

  // ボタン要素にネイティブのクリックイベントをディスパッチします。
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText("Times clicked: 2");
});