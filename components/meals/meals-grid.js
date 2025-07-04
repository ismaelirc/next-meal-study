import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals}) {
  return <ul className={classes.meals}>
    {meals.map(meail => <li key={meail.id}>
      <MealItem {...meail} />
    </li>)}
  </ul>
}
