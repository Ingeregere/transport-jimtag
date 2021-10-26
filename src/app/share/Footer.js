import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                &copy; {new Date().getFullYear()} JimTag All rights reserved. Designed by <a href='https://www.burundi.jobs.bi' target={'_blank'}> Burundijobs</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;