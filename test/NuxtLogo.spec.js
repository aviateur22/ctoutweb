import { mount } from '@vue/test-utils';
import contactMe from '@/components/ContactMe.vue';

describe('contactMe', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(contactMe);
        expect(wrapper.vm).toBeTruthy();
    });
});
