// 1 - Віджет відгуків

// Як і більшість компаній, кафе Expresso збирає відгуки від своїх клієнтів.
// Твоє завдання – створити додаток для збору статистики.Є лише три варіанти
// зворотного зв'язку: добре, нейтрально і погано.

// Крок 1

// Застосунок повинен відображати кількість зібраних відгуків для кожної
// категорії. Застосунок не повинен зберігати статистику відгуків між різними
// сесіями(оновлення сторінки).

// Стан застосунку обов'язково повинен бути наступного вигляду, додавати
// нові властивості не можна.

/* state = {
  good: 0,
  neutral: 0,
  bad: 0
} */

// Інтерфейс може мати такий вигляд.

// component preview
// Крок 2

// Розшир функціонал застосунку таким чином, щоб в інтерфейсі відображалося більше статистики про зібрані відгуки. Додай відображення загальної кількості зібраних відгуків з усіх категорій та відсоток позитивних відгуків. Для цього створи допоміжні методи countTotalFeedback() і countPositiveFeedbackPercentage(), які підраховують ці значення, ґрунтуючись на даних у стані (обчислювані дані).

// component preview
// Крок 3

// Виконай рефакторинг застосунку. Стан застосунку повинен залишатися у кореневому компоненті <App>.

// Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Створи компонент <Section title="">, який рендерить секцію із заголовком і дітей (children). Обгорни кожен із <Statistics> і <FeedbackOptions> у створений компонент секції.
// Крок 4

// Розшир функціонал застосунку таким чином, щоб блок статистики рендерився тільки після того, як було зібрано хоча б один відгук. Повідомлення про відсутність статистики винеси в компонент <Notification message="There is no feedback">.

// component preview
import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '400px' }}>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() < 1 ? (
            <NotificationMessage message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
