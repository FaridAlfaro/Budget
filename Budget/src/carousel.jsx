import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const slider = (
  <AwesomeSlider cssModule={styles}>
    <div data-src="/path/to/image.jpg">
      <p>I want to see what you got.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>The answer is -- Don't think about it.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Sometimes science is more art than science.</p>
    </div>
    <div data-src="/path/to/image.jpg">
      <p>Love, connection, experience.</p>
    </div>
  </AwesomeSlider>
);