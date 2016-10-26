var StyleRoot = Radium.StyleRoot;
// use color module instead instead
var colors = {
  deepPurple: '#673ab7',
  deepPurpleLighten2: '#9575cd',
  deepPurpleLighten4: '#d1c4e9'
};

var mediaQueries = {
  medium: '@media screen and (min-width: 768px)',
  large: '@media screen and (min-width: 1024px)'
};

var styles = {
  columnDropContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  columnMain: {
    boxSizing: 'border-box',
    padding: '1rem',
    width: '100%',
    backgroundColor: colors.deepPurple,
    //ES6 Computed property names
    [mediaQueries.medium]: {
      width: '60%',
      order: 2,
    }
  },
  columnOne: {
    boxSizing: 'border-box',
    padding: '1rem',
    width: '100%',
    backgroundColor: colors.deepPurpleLighten2,
    //ES6 Computed property names
    [mediaQueries.medium]: {
      width: '40%',
      order: 1,
    },
    [mediaQueries.large]: {
      width: '20%',
      order: 1,
    }
  },
  columnTwo: {
    boxSizing: 'border-box',
    padding: '1rem',
    width: '100%',
    backgroundColor: colors.deepPurpleLighten4,
    //ES6 Computed property names
    [mediaQueries.medium]: {
      width: '100%',
      order: 3,
    },
    [mediaQueries.large]: {
      width: '20%',
      order: 3,
    }
  }
};

var ColumnDrop = Radium(React.createClass({
  render: function () {
    return (
      <div style={[styles.columnDropContainer]}>
        <div style={[styles.columnMain]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper fermentum magna, in convallis lacus sollicitudin at.
          Donec aliquam consectetur sem, sed malesuada risus commodo at.
        </div>
        <div style={[styles.columnOne]}>
          Nunc sodales dui quis mauris facilisis, in tempor purus posuere. Aenean elementum auctor dolor, quis tristique sem. Nunc
          vestibulum dignissim odio, et placerat orci posuere in.
        </div>
        <div style={[styles.columnTwo]}>
          Vivamus condimentum ex enim, et dictum libero vestibulum nec. Praesent massa dolor, elementum in magna eget, venenatis suscipit
          enim. Morbi mi nulla, aliquam non nunc in, vestibulum maximus velit.
        </div>
      </div>
    )
  }
}));

var Application = React.createClass({
  render: function () {
    return (
      <StyleRoot>
        <h2 style ={{textAlign:'center'}}> Column Drop with inline styles in react radium</h2>
        <ColumnDrop />
      </StyleRoot>
    )
  }
});

ReactDOM.render(
  <Application />, document.getElementById('main'));