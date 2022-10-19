import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nobis libero non nemo est esse sed voluptate fugiat rerum
    possimus dicta accusamus officiis culpa quasi dolores,
    laudantium dolor quas? Hic, velit.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
