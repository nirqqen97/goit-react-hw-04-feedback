import { useState } from "react";
import {Section} from "./Section/Section";
import {Statistic} from "./Statisctic/Statisctic";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Notification} from "./Notification/Notification";

export const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onLeaveFeedback = item => {
    switch (item) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  }
  const countPositiveFeedbackPercentage = (good,total) => {
    return Math.round(good/total * 100);
  }
  const countTotalFeedback = () => {
      return good + neutral + bad
  }
  const options=['good', 'neutral', 'bad'];  return (
    <>
    <Section title = {"Please leave Feedback"}>
    <FeedbackOptions onLeaveFeedback={onLeaveFeedback} option={options}/> 
     </Section>
     {countTotalFeedback() > 0 ? (
       <Section title = {"Statistic"}>
         <Statistic good={good}
       neutral={neutral} 
       bad={bad} 
       total={countTotalFeedback()}
       positivePercentage = {countPositiveFeedbackPercentage}/></Section>
  ) : (<Notification message={"There is no feedback"}/>)
 } 
 </>
   );
}

// export class App extends Component {

// }
//
//
//
//
//
//
//

//
//
//
//
//
//
//


//   render(){
//    
//     console.log(options);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// }
// };