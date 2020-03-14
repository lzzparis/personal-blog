import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'
import styles from './HomePage.styles'

const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Placeholder for blog posts
    </div>
  )
}

export default Home
