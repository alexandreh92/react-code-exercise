import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { ApplicationState } from '~/@types';

export const useStore: TypedUseSelectorHook<ApplicationState> = useSelector;
