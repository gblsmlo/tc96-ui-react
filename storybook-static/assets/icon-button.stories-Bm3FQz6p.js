import{I as p}from"./index-B90NvwHe.js";import"./jsx-runtime-u17CrQMm.js";import"./index-DBSB4Jwm.js";import"./index-psZhPCVI.js";import"./iframe-BRm_1KQT.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t,fn:g,within:s}=__STORYBOOK_MODULE_TEST__,x={args:{onClick:g()},component:p,tags:["autodocs"],title:"Components/IconButton"},c={args:{"aria-label":"Search",children:"⚡︎",variant:"solid"},play:async({canvasElement:n,userEvent:e,args:a})=>{const o=s(n).getByRole("button",{name:"Search"});await t(o).toHaveAttribute("data-slot","icon-button"),await t(o).toHaveAttribute("aria-label","Search"),await t(o).not.toBeDisabled(),await e.click(o),await t(a.onClick).toHaveBeenCalledTimes(1)}},r={args:{"aria-label":"Heart",children:"⚡︎",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Heart"});await t(a).toHaveClass(/bg-accent/)}},i={args:{"aria-label":"Settings",children:"⚡︎",variant:"outline"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Settings"});await t(a).toHaveClass(/border/),await t(a).toHaveClass(/bg-transparent/)}},l={args:{"aria-label":"Menu",children:"☰",variant:"ghost"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Menu"});await t(a).toHaveClass(/hover:bg-accent/)}},u={args:{"aria-label":"Delete",children:"⚡︎",variant:"destructive"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Delete"});await t(a).toHaveClass(/bg-destructive/)}},b={args:{"aria-disabled":"true","aria-label":"Disabled button",children:"⚡︎",disabled:!0,variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Disabled button"});await t(a).toBeDisabled(),await t(a).toHaveAttribute("disabled"),await t(a).toHaveAttribute("aria-disabled","true"),await t(a).toHaveClass(/disabled:bg-slate-300/),await t(a).toHaveClass(/disabled:text-slate-500/)}},d={args:{"aria-label":"Small icon button",children:"⚡︎",size:"sm",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Small icon button"});await t(a).toHaveClass(/size-8/),await t(a).toHaveClass(/rounded-md/)}},v={args:{"aria-label":"Base icon button",children:"⚡︎",size:"base",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Base icon button"});await t(a).toHaveClass(/size-10/)}},m={args:{"aria-label":"Large icon button",children:"⚡︎",size:"lg",variant:"solid"},play:async({canvasElement:n})=>{const a=s(n).getByRole("button",{name:"Large icon button"});await t(a).toHaveClass(/size-12/),await t(a).toHaveClass(/rounded-md/)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Search',
    children: '⚡︎',
    variant: 'solid'
  },
  play: async ({
    canvasElement,
    userEvent,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Search'
    });
    await expect(button).toHaveAttribute('data-slot', 'icon-button');
    await expect(button).toHaveAttribute('aria-label', 'Search');
    await expect(button).not.toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Heart',
    children: '⚡︎',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Heart'
    });
    await expect(button).toHaveClass(/bg-accent/);
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Settings',
    children: '⚡︎',
    variant: 'outline'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Settings'
    });
    await expect(button).toHaveClass(/border/);
    await expect(button).toHaveClass(/bg-transparent/);
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Menu',
    children: '☰',
    variant: 'ghost'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Menu'
    });
    await expect(button).toHaveClass(/hover:bg-accent/);
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Delete',
    children: '⚡︎',
    variant: 'destructive'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Delete'
    });
    await expect(button).toHaveClass(/bg-destructive/);
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-disabled': 'true',
    'aria-label': 'Disabled button',
    children: '⚡︎',
    disabled: true,
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Disabled button'
    });
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('disabled');
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(button).toHaveClass(/disabled:bg-slate-300/);
    await expect(button).toHaveClass(/disabled:text-slate-500/);
  }
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Small icon button',
    children: '⚡︎',
    size: 'sm',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Small icon button'
    });
    await expect(button).toHaveClass(/size-8/);
    await expect(button).toHaveClass(/rounded-md/);
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Base icon button',
    children: '⚡︎',
    size: 'base',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Base icon button'
    });
    await expect(button).toHaveClass(/size-10/);
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Large icon button',
    children: '⚡︎',
    size: 'lg',
    variant: 'solid'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Large icon button'
    });
    await expect(button).toHaveClass(/size-12/);
    await expect(button).toHaveClass(/rounded-md/);
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","Solid","Outline","Ghost","Destructive","Disabled","Small","Base","Large"];export{v as Base,c as Default,u as Destructive,b as Disabled,l as Ghost,m as Large,i as Outline,d as Small,r as Solid,E as __namedExportsOrder,x as default};
