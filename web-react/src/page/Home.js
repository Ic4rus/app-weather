import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Home.css';
import 'antd/dist/antd.css';
import Lottie from 'react-lottie';
import animationData from '../lottie/4801-weather-partly-shower.json';
import ic_temp from '../asset/ic_temp.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 0,
    };
  }

  onChangeUnit = (newUnit) => {
    this.setState({ unit: newUnit });
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className='container'>
        <Row>
          <Col span={4} className='conditions-box'>
            <Lottie options={defaultOptions} height={100} width={100} />
          </Col>
          <Col span={4} className='conditions-box'>
            <div className='cbox-content'>
              <div className='temperature'>
                <span className='temp-value'>27</span>
                <div className='temp-unit'>
                  <span
                    className={
                      this.state.unit === 0 ? 'active-unit' : 'inactive-unit'
                    }
                    onClick={() => this.onChangeUnit(0)}
                  >
                    °C
                  </span>
                  <span> | </span>
                  <span
                    className={
                      this.state.unit === 1 ? 'active-unit' : 'inactive-unit'
                    }
                    onClick={() => this.onChangeUnit(1)}
                  >
                    °F
                  </span>
                </div>
              </div>
              <div className='time-and-place'>
                <div>Friday 9:00</div>
                <div className='location'>Ha dong, Ha noi</div>
              </div>
            </div>
          </Col>
          <Col span={4} className='conditions-box'>
            <div className='cbox-content'>
              <div className='condition-detail detail-active'>
                <img src={ic_temp} alt='' />
                <span>Feels like 30</span>
              </div>
              <div className='condition-detail'>Humdimity 69%</div>
              <div className='condition-detail'>Visibility 15km</div>
            </div>
          </Col>
          <Col span={6} className='conditions-box'></Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
