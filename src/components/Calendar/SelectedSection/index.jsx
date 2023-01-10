import PropTypes from 'prop-types';
import styles from './style.module.sass';
import TextTransition, { presets } from 'react-text-transition';

const WEEK_DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

function SelectedSection({ selected }) {
  return (
    <div className={styles.selectedSection}>
      <TextTransition
        direction="down"
        springConfig={presets.slow}
        className={styles.sectionName}
      >
        {WEEK_DAYS[selected.getDay()]}
      </TextTransition>
      <TextTransition
        direction="down"
        springConfig={presets.slow}
        className={styles.selectedDate}
      >
        {selected.getDate()}
      </TextTransition>
    </div>
  );
}

SelectedSection.propTypes = {
  selected: PropTypes.instanceOf(Date),
};

export default SelectedSection;
