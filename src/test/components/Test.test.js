import { mount } from "@vue/test-utils";
import Test from "../../../src/components/Test.vue";
import { describe, it, expect } from "vitest";

describe("Test.vue", () => {
  it("renderiza correctamente el componente", () => {
    const wrapper = mount(Test);
    expect(wrapper.exists()).toBe(true);
  });

  it("muestra correctamente la lista de elementos", () => {
    const wrapper = mount(Test);
    const items = wrapper.findAll(".v-container div");
    expect(items.length).toBe(5);
  });

  it("aplica correctamente las clases 'gray-bg' e 'hidden'", () => {
    const wrapper = mount(Test);
    const items = wrapper.findAll(".v-container div");

    items.forEach((item, index) => {
      if (index % 2 !== 0) {
        expect(item.classes()).toContain("gray-bg");
      } else {
        expect(item.classes()).toContain("hidden");
      }
    });
  });

  it("genera el output correcto al hacer clic en el botón", async () => {
    const wrapper = mount(Test);
    const button = wrapper.find(".btn");
    await button.trigger("click");

    expect(wrapper.find(".output").text()).toBe("El total de listado es: 5");
  });
});
