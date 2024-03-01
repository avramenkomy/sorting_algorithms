import React from 'react';
import { useTheme } from '@emotion/react';

function ArrayElement(props) {
  const { id, w, h, active, sorted, max, display } = props;

  const elemHeight = ((window.innerHeight - 350) * h / max) + 3;

  const theme = useTheme();
  const elemBackground = theme.palette.background.paper;
  const bgColor = active
    ? theme.palette.warning.light : sorted
    ? theme.palette.success.main : theme.palette.error.main;

  return (
    <div
      className="array-element"
      id={id}
      style={{
        width: w,
        height: elemHeight,
        backgroundColor: bgColor,
        borderColor: elemBackground,
        /** FIXME: Костыль, описание в родительском компоненте */
        visibility: display === 'hidden' ? 'hidden' : 'visible'
      }}
    />
  )
}

export default ArrayElement;
