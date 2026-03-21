import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

const Alert = () => {
    const { successType } = useAppContext();

  return (
    successType ? (
        <SuccessAlert />
    ) : (
        <ErrorAlert />
    )
  )
}

export default Alert