// Its useful to create our own PropTypes so we
// don't have to repeat the definition everywhere
import PropTypes from "prop-types";
const MyPropTypes = {
    roundsProps: PropTypes.exact({
        rounds: PropTypes.number, 
        current: PropTypes.number,
        rest: PropTypes.number,
    }),
    timerProps: PropTypes.exact({
        rounds: PropTypes.bool, 
        timer: {
            h: PropTypes.number, 
            m: PropTypes.number,
            s: PropTypes.number,
            ms: PropTypes.number,
        }
    })
  };