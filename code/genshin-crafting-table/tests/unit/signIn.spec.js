// import { mount } from '@vue/test-utils'
// import Header from '@/components/Header.vue'
// import NavigationButton from '@/components/NavigationButton.vue'
// import SignInButton from '@/components/SignInButton.vue'

// import logo from '../../src/assets/images/headerLogo.png'
// import rightArrow from '../../src/assets/images/nextLogo.png'
// import sinon from 'sinon'


// describe('Header', () => {
//     const wrapper = mount(Header);

//     it('has the logo', () => {
//         expect(wrapper.find('img').exists()).toBe(true);
//     })

//     it('has the right image', () => {
//         const imgTag = wrapper.find('img');
//         expect(imgTag.attributes('src')).toBe(logo);
//     })

// })

// describe('SignInButton', () => {
//     const spy = sinon.spy();

//     // Check if button is there
//     const wrapper = mount(SignInButton, {
//         propsData:{
//             label: "Sign In",
//             handler: spy
//         }
//     });

//     it('has sign in label', () => {
//         expect(wrapper.find('p').element.innerHTML).toBe("Sign In");
//     });


// });

// describe('NavigationButton', () => {
//     const spy = sinon.spy();
//     const wrapper = mount(NavigationButton, {
//         propsData:{
//             handler: spy,
//             label: "Proceed without logging in",
//             labelOrientation: "right",
//             logo: rightArrow
//         }
//     });

//     // check if the right arrow button is there
//     it('has the next button', () => {
//         expect(wrapper.exists()).toBe(true);
//     })

//     // checking click
//     it('clicks', async () => {
//         await wrapper.trigger('click')

//         // test here if it change page
//     })

//     // check if has the right logo
//     it('has the right logo', () => {
//         expect(wrapper.find('img').attributes('src')).toBe(rightArrow);
//     })

//     // check if it has the right label
//     it('has the right label', () => {
//         expect(wrapper.find('span').element.innerHTML).toBe("Proceed without logging in")
//     })

// })