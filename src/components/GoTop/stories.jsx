import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        esse rem nemo natus, unde temporibus maxime dicta sapiente illum sequi
        dolores distinctio possimus facilis enim in ut ducimus. Incidunt, nobis?
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        esse rem nemo natus, unde temporibus maxime dicta sapiente illum sequi
        dolores distinctio possimus facilis enim in ut ducimus. Incidunt, nobis?
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        esse rem nemo natus, unde temporibus maxime dicta sapiente illum sequi
        dolores distinctio possimus facilis enim in ut ducimus. Incidunt, nobis?
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        esse rem nemo natus, unde temporibus maxime dicta sapiente illum sequi
        dolores distinctio possimus facilis enim in ut ducimus. Incidunt, nobis?
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        esse rem nemo natus, unde temporibus maxime dicta sapiente illum sequi
        dolores distinctio possimus facilis enim in ut ducimus. Incidunt, nobis?
      </p>
      <GoTop {...args} />
    </div>
  );
};
