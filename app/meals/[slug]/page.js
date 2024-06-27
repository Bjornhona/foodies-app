import classes from './page.module.css';
import Image from 'next/image';
import {getMeal, deleteMeal} from '@/lib/meals';
import {notFound} from 'next/navigation';

export const generateMetadata = async ({params}) => {
  const meal = getMeal(params.slug);

  if (!meal) notFound();

  return {
  title: meal.title,
  description: meal.summary,
}};

const MealItem = ({params}) => {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  const handleDeleteMeal = () => {
    deleteMeal(meal);
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.mainContent}>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p>
        <button
          className={classes.button}
          // onClick={handleDeleteMeal}
          type="button">
            Delete meal
        </button>
      </main>
    </>
  )
}

export default MealItem;