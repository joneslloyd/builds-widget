import habitat from 'preact-habitat';
import { createRef } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import * as goober from 'goober';
import { globalStylesExport } from './app/styles/global-styles/global-styles-export';
import AppShadowSection from './app/components/app-shadow-section';

if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

/* eslint-disable no-undef */
goober.setup(h);

const Widget = (props) => {

    return (
        <AppShadowSection {...props} />
    );
};

const { render } = habitat(Widget);

render({
    selector: '[data-moba-widget="build"]',
    clean: true
});