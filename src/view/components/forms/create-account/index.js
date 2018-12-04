import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import DisplayIdenticons from '../../../general/identicons';
import cross from './cross.svg';
import check from './check.svg';
import user from './user.svg';
import lock from './lock.svg';

export default class CreateAccount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      accountName,
      onUpdate,
      password,
      reEnteredPassword,
      passwordHint,
      date,
      animateRefreshIcon,
      identiconsId,
      onRefresh,
      getRadioIconData,
      containNumber,
      containCapitalLetter,
      hasLengthGreaterThanEight,
      selectedIcon,
      error,
      isAccountNameExists,
    } = this.props;
    return (
      <Form id="create-account-form">
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={accountName}
            onChange={e => onUpdate('accountName', e.currentTarget.value)}
            style={{ backgroundImage: `url(${user})` }}
          />
          {isAccountNameExists ? (
            <p style={{ color: 'red', 'margin-top': '10px' }}>Account Name already exists</p>
          ) : (
            ''
          )}
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="pass"
                placeholder="Enter Password"
                value={password}
                onChange={e => onUpdate('password', e.currentTarget.value)}
                style={{ backgroundImage: `url(${lock})` }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="name"
                placeholder="Re Enter Password"
                value={reEnteredPassword}
                onChange={e => onUpdate('reEnteredPassword', e.currentTarget.value)}
                style={{ backgroundImage: `url(${lock})` }}
              />
            </FormGroup>
            {error && <p style={{ color: 'red' }}>Paswords do not match</p>}
          </Col>
          <Col md={4} lg={3}>
            <ul className="pass-validator">
              <li className="correct">
                <img
                  src={hasLengthGreaterThanEight ? check : cross}
                  alt="correct"
                  className="ico"
                />
                8+ Characters
              </li>
              <li className="false">
                <img src={containCapitalLetter ? check : cross} alt="invalid" className="ico" />
                1+ Capilital Letter
              </li>
              <li className="false">
                <img src={containNumber ? check : cross} alt="invalid" className="ico" />
                1+ Number
              </li>
            </ul>
          </Col>
        </Row>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Password Hint"
            value={passwordHint}
            onChange={e => onUpdate('passwordHint', e.currentTarget.value)}
            style={{ backgroundImage: `url(${lock})` }}
          />
        </FormGroup>
        <DisplayIdenticons
          animateRefreshIcon={animateRefreshIcon}
          date={date}
          identiconsId={identiconsId}
          selectedIcon={selectedIcon}
          onRefresh={onRefresh}
          getRadioIconData={getRadioIconData}
        />
        {/* <Button onClick={createNewAccount}>Create Account</Button> */}
      </Form>
    );
  }
}

CreateAccount.defaultProps = {
  reEnteredPassword: '',
  passwordHint: '',
};

CreateAccount.propTypes = {
  accountName: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  reEnteredPassword: PropTypes.string,
  passwordHint: PropTypes.string,
  date: PropTypes.number.isRequired,
  animateRefreshIcon: PropTypes.bool.isRequired,
  identiconsId: PropTypes.string.isRequired,
  onRefresh: PropTypes.func.isRequired,
  getRadioIconData: PropTypes.func.isRequired,
  containNumber: PropTypes.bool.isRequired,
  containCapitalLetter: PropTypes.bool.isRequired,
  hasLengthGreaterThanEight: PropTypes.bool.isRequired,
  selectedIcon: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  isAccountNameExists: PropTypes.bool.isRequired,
};
