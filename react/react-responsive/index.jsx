var MediaQuery = reactResponsive;

var Application = React.createClass({
  render: function () {
    var smSupremum = 568;
    var mdSupremum = 990;
    var mdInfimum = 569;
    var lgInfimum = 991;
    return (
      <div>
        <div>
          <h2 className="title">react-responsive media queries demo</h2>
        </div>
        <MediaQuery maxWidth={smSupremum}>
          <div className="mq-message deep-purple">Displayed on small screens </div>
        </MediaQuery>

        <MediaQuery minWidth={mdInfimum} maxWidth={mdSupremum}>
          <div className="mq-message deep-purple--lighten-2">Displayed on medium screens</div>
        </MediaQuery>

        <MediaQuery minWidth={lgInfimum}>
          <div className="mq-message deep-purple--lighten-4">Displayed on large screens</div>
        </MediaQuery>
      </div>
    )
  }
});

ReactDOM.render(
  <Application />, document.getElementById('main'));