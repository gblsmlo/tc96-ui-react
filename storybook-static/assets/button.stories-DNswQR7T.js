import{B as p}from"./index-DdAMQRwh.js";import"./jsx-runtime-u17CrQMm.js";import"./index-DBSB4Jwm.js";import"./index-psZhPCVI.js";import"./iframe-BRm_1KQT.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:g,within:s}=__STORYBOOK_MODULE_TEST__,D={args:{onClick:g()},component:p,parameters:{a11y:{test:"error"}},tags:["autodocs"],title:"Components/Button"},c={args:{children:"Default",variant:"solid"},play:async({canvasElement:n,userEvent:e,args:a})=>{const o=s(n).getByRole("button",{name:"Default"});await t(o).toHaveAttribute("data-slot","button"),await t(o).toHaveTextContent("Default"),await t(o).toHaveStyle({height:"40px"}),await t(o).not.toBeDisabled(),await e.click(o),await t(a.onClick).toHaveBeenCalledTimes(1)}},r={args:{children:"Outline",variant:"outline"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Outline"});await t(a).toHaveClass(/border/),await t(a).toHaveClass(/bg-transparent/)}},i={args:{children:"Destructive",variant:"destructive"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Destructive"});await t(a).toHaveClass(/bg-destructive/)}},l={args:{children:"Ghost",variant:"ghost"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Ghost"});await t(a).toHaveClass(/hover:bg-accent/)}},u={args:{children:"Link",variant:"link"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Link"});await t(a).toHaveClass(/underline-offset-4/)}},v={args:{"aria-disabled":"true",children:"Disabled",disabled:!0,variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button");await t(a).toBeDisabled(),await t(a).toHaveAttribute("disabled"),await t(a).toHaveAttribute("aria-disabled","true"),await t(a).toHaveClass(/disabled:bg-slate-300/),await t(a).toHaveClass(/disabled:text-slate-500/)}},d={args:{children:"Small Button",size:"sm",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Small Button"});await t(a).toHaveClass(/h-8/),await t(a).toHaveClass(/rounded-md/)}},b={args:{children:"Base Button",size:"base",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Base Button"});await t(a).toHaveClass(/h-10/)}},m={args:{children:"Large Button",size:"lg",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Large Button"});await t(a).toHaveClass(/h-12/),await t(a).toHaveClass(/rounded-md/)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'solid'
  },
  play: async ({
    canvasElement,
    userEvent,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Default'
    });
    await expect(button).toHaveAttribute('data-slot', 'button');
    await expect(button).toHaveTextContent('Default');
    await expect(button).toHaveStyle({
      height: '40px'
    });
    await expect(button).not.toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Outline'
    });
    await expect(button).toHaveClass(/border/);
    await expect(button).toHaveClass(/bg-transparent/);
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Destructive',
    variant: 'destructive'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Destructive'
    });
    await expect(button).toHaveClass(/bg-destructive/);
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Ghost'
    });
    await expect(button).toHaveClass(/hover:bg-accent/);
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    variant: 'link'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Link'
    });
    await expect(button).toHaveClass(/underline-offset-4/);
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-disabled': 'true',
    children: 'Disabled',
    disabled: true,
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('disabled');
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(button).toHaveClass(/disabled:bg-slate-300/);
    await expect(button).toHaveClass(/disabled:text-slate-500/);
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Small Button'
    });
    await expect(button).toHaveClass(/h-8/);
    await expect(button).toHaveClass(/rounded-md/);
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Base Button',
    size: 'base',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Base Button'
    });
    await expect(button).toHaveClass(/h-10/);
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Large Button'
    });
    await expect(button).toHaveClass(/h-12/);
    await expect(button).toHaveClass(/rounded-md/);
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Outline","Destructive","Ghost","Link","Disabled","Small","Base","Large"];export{b as Base,c as Default,i as Destructive,v as Disabled,l as Ghost,m as Large,u as Link,r as Outline,d as Small,E as __namedExportsOrder,D as default};
