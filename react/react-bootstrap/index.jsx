var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Image = ReactBootstrap.Image;

var Application = React.createClass({
  render: function () {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2 className="title">react-bootstrap grid system demo</h2>
          </Col>
          <Col xs={12} sm={12} md={10} lg={8} lgOffset={2} lgOffset={1}>
            <Image src="dog.jpg" responsive />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12}><code>&lt;{'Col xs={12} sm={12} md={12} lg={12}'}/&gt;</code></Col>
        </Row>
        <Row className="show-grid">
        <Col xs={12} md={8} lgHidden><code>&lt;{'Col xs={12} md={12} lgHidden'}/&gt;</code></Col>
          <Col xs={6} md={4} lg={3}><code>&lt;{'Col xs={6} md={4} lg={3}'}/&gt;</code></Col>
          <Col xs={6} md={4} lg={3}><code>&lt;{'Col xs={6} md={4} lg={3}'}/&gt;</code></Col>
          <Col xs={6} md={4} lg={3}><code>&lt;{'Col xs={6} md={4} lg={3}'}/&gt;</code></Col>
          <Col xs={6} md={4} lg={3}><code>&lt;{'Col xs={6} md={4} lg={3}'}/&gt;</code></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'}/&gt;</code></Col>
        </Row>
      </Grid>
    )
  }
});

ReactDOM.render(
  <Application />, document.getElementById('main'));