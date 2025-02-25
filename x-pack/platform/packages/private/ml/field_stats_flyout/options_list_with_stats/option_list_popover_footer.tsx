/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import type { FC } from 'react';
import { EuiPopoverFooter, EuiSwitch, EuiProgress, useEuiTheme } from '@elastic/eui';
import { css } from '@emotion/react';
import { i18n } from '@kbn/i18n';

export const OptionsListPopoverFooter: FC<{
  showEmptyFields: boolean;
  setShowEmptyFields: (showEmptyFields: boolean) => void;
  isLoading?: boolean;
}> = ({ showEmptyFields, setShowEmptyFields, isLoading }) => {
  const { euiTheme } = useEuiTheme();

  return (
    <EuiPopoverFooter
      paddingSize="none"
      css={css({
        height: euiTheme.size.xxl,
        backgroundColor: euiTheme.colors.backgroundBaseSubdued,
        alignItems: 'center',
        display: 'flex',
        paddingLeft: euiTheme.size.s,
      })}
    >
      {isLoading ? (
        // @ts-expect-error css should be ok
        <div css={css({ position: 'absolute', width: '100%' })}>
          <EuiProgress
            data-test-subj="optionsList-control-popover-loading"
            size="xs"
            color="accent"
          />
        </div>
      ) : null}

      <EuiSwitch
        data-test-subj="optionsListIncludeEmptyFields"
        label={i18n.translate('xpack.ml.controls.optionsList.popover.includeEmptyFieldsLabel', {
          defaultMessage: 'Include empty fields',
        })}
        checked={showEmptyFields}
        onChange={(e) => setShowEmptyFields(e.target.checked)}
      />
    </EuiPopoverFooter>
  );
};
