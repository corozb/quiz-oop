import { Question } from '../models/Question.js'
import { data } from './data.js'

export const question = data.map(({ question, choices, answer }) => new Question(question, choices, answer))
