import{I as h}from"./index-Dta8onDd.js";import"./jsx-runtime-u17CrQMm.js";import"./index-DBSB4Jwm.js";import"./iframe-BRm_1KQT.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:w,within:s}=__STORYBOOK_MODULE_TEST__,T={args:{onChange:w()},component:h,parameters:{a11y:{test:"error"}},tags:["autodocs"],title:"Components/Input"},r={args:{placeholder:"Enter text..."},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Enter text...");await t(a).toHaveAttribute("data-slot","input"),await t(a).toHaveAttribute("type","text"),await t(a).not.toBeDisabled()}},c={args:{placeholder:"Small input",size:"sm"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Small input");await t(a).toHaveClass(/h-8/),await t(a).toHaveClass(/text-xs/)}},o={args:{placeholder:"Base input",size:"base"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Base input");await t(a).toHaveClass(/h-10/)}},l={args:{placeholder:"Large input",size:"lg"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Large input");await t(a).toHaveClass(/h-12/),await t(a).toHaveClass(/text-base/)}},i={args:{disabled:!0,placeholder:"Disabled input"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Disabled input");await t(a).toBeDisabled(),await t(a).toHaveClass(/disabled:cursor-not-allowed/),await t(a).toHaveClass(/disabled:opacity-50/)}},p={args:{"aria-invalid":!0,placeholder:"Invalid input"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Invalid input");await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveClass(/aria-invalid:border-destructive/)}},u={args:{defaultValue:"Pre-filled value",placeholder:"Enter text..."},play:async({canvasElement:e})=>{const a=s(e).getByDisplayValue("Pre-filled value");await t(a).toHaveValue("Pre-filled value")}},d={args:{placeholder:"email@example.com",type:"email"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("email@example.com");await t(a).toHaveAttribute("type","email")}},v={args:{placeholder:"Enter password",type:"password"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Enter password");await t(a).toHaveAttribute("type","password")}},m={args:{placeholder:"Enter number",type:"number"},play:async({canvasElement:e})=>{const a=s(e).getByPlaceholderText("Enter number");await t(a).toHaveAttribute("type","number")}},y={args:{placeholder:"Type something..."},play:async({canvasElement:e,userEvent:n,args:a})=>{const g=s(e).getByPlaceholderText("Type something...");await n.type(g,"Hello"),await t(g).toHaveValue("Hello"),await t(a.onChange).toHaveBeenCalled()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter text...');
    await expect(input).toHaveAttribute('data-slot', 'input');
    await expect(input).toHaveAttribute('type', 'text');
    await expect(input).not.toBeDisabled();
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    size: 'sm'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Small input');
    await expect(input).toHaveClass(/h-8/);
    await expect(input).toHaveClass(/text-xs/);
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Base input',
    size: 'base'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Base input');
    await expect(input).toHaveClass(/h-10/);
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    size: 'lg'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Large input');
    await expect(input).toHaveClass(/h-12/);
    await expect(input).toHaveClass(/text-base/);
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Disabled input');
    await expect(input).toBeDisabled();
    await expect(input).toHaveClass(/disabled:cursor-not-allowed/);
    await expect(input).toHaveClass(/disabled:opacity-50/);
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Invalid input');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveClass(/aria-invalid:border-destructive/);
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Pre-filled value',
    placeholder: 'Enter text...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue('Pre-filled value');
    await expect(input).toHaveValue('Pre-filled value');
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'email@example.com',
    type: 'email'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('email@example.com');
    await expect(input).toHaveAttribute('type', 'email');
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    type: 'password'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter password');
    await expect(input).toHaveAttribute('type', 'password');
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    type: 'number'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter number');
    await expect(input).toHaveAttribute('type', 'number');
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...'
  },
  play: async ({
    canvasElement,
    userEvent,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type something...');
    await userEvent.type(input, 'Hello');
    await expect(input).toHaveValue('Hello');
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...y.parameters?.docs?.source}}};const C=["Default","Small","Base","Large","Disabled","Invalid","WithValue","Email","Password","NumberInput","WithOnChange"];export{o as Base,r as Default,i as Disabled,d as Email,p as Invalid,l as Large,m as NumberInput,v as Password,c as Small,y as WithOnChange,u as WithValue,C as __namedExportsOrder,T as default};
