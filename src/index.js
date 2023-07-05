import './style.css';
import { inView, animate, scroll, spring, timeline, stagger, } from "motion";

inView('#jumbotron', ({ target }) => {
  console.log(target.querySelectorAll('h1'))
  animate(
    target.querySelectorAll('h1'),
    { opacity: 1, transform: [ "translateX(200px)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
  animate(
    target.querySelector('h2'),
    { opacity: 1, transform: [ "translateY(20px)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
});
inView('#skill', ({ target }) => {
  animate(
    target.querySelectorAll('h1'),
    { opacity: 1, transform: [ "translateX(200px)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
  animate(
    target.querySelectorAll('#frameworks'),
    { opacity: 1, transform: ["translateY(100px) rotate(45deg)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
  animate(
    target.querySelectorAll('h3'),
    { opacity: 1, transform: [ "translateX(200px)", "none"] },
    { delay: 0.3, duration: 0.9 },
  )
  animate(
    target.querySelectorAll('h2'),
    { opacity: 1, transform: [ "translateY(200px)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
  animate(
    target.querySelectorAll('ul'),
    { opacity: 1, transform: [ "translateY(200px)", "none"] },
    { delay: 0.9, duration: 0.9 },
  )
});
