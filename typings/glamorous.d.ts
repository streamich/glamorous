// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'
import {HTMLComponent, SVGComponent} from './built-in-glamorous-components'
import {
  HTMLComponentFactory,
  HTMLKey,
  SVGComponentFactory,
  SVGKey,
} from './built-in-component-factories'
import {
  GlamorousComponent,
  GlamorousComponentProps,
  GlamorousComponentFunctions,
  ExtraGlamorousProps,
} from './glamorous-component'
import {
  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  KeyGlamorousComponentFactoryCssOverides,
  GlamorousComponentFactory,
  GlamorousComponentFactoryCssOverides,
} from './component-factory'
import {
  CSSProperties,
  CSSPropertiesCompleteSingle,
  CSSPropertiesComplete,
  CSSPropertiesPseudo,
  CSSPropertiesLossy,
} from './css-properties'
import {
  SVGProperties,
  SVGPropertiesCompleteSingle,
  SVGPropertiesComplete,
  SVGPropertiesLossy,
} from './svg-properties'
import {StyleFunction, StyleArray, StyleArgument} from './style-arguments'
import {
  DOMTagComponentFactory,
  SVGTagComponentFactory,
  HTMLDomTags,
  SVGDomTags,
  DOMTagGlamorousComponentFactory,
  SVGTagGlamorousComponentFactory,
} from './dom-tag-component-factory'

import {Omit} from './helpers'

export {
  CSSProperties,
  CSSPropertiesCompleteSingle,
  CSSPropertiesComplete,
  CSSPropertiesPseudo,
  CSSPropertiesLossy,
  SVGProperties,
  SVGPropertiesCompleteSingle,
  SVGPropertiesComplete,
  SVGPropertiesLossy,
  GlamorousComponent,
  GlamorousComponentProps,
  GlamorousComponentFunctions,
  ExtraGlamorousProps,
  StyleFunction,
  StyleArray,
  StyleArgument,
  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  KeyGlamorousComponentFactoryCssOverides,
  GlamorousComponentFactory,
  GlamorousComponentFactoryCssOverides,
  HTMLComponent,
  SVGComponent,
  HTMLComponentFactory,
  HTMLKey,
  SVGComponentFactory,
  SVGKey,
  DOMTagComponentFactory,
  SVGTagComponentFactory,
  HTMLDomTags,
  SVGDomTags,
  DOMTagGlamorousComponentFactory,
  SVGTagGlamorousComponentFactory,
}

export interface GlamorousOptions<Props, Context, DefaultProps> {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
  shouldClassNameUpdate: (
    props: Props,
    prevProps: Props,
    context: Context,
    prevContext: Context,
  ) => boolean
  propsAreCssOverrides?: false
  withProps: DefaultProps
}

export interface PropsAreCssOverridesGlamorousOptions<
  Props,
  Context,
  DefaultProps
> {
  displayName?: string
  rootEl?: string | Element
  forwardProps?: String[]
  shouldClassNameUpdate?: (
    props: Props,
    prevProps: Props,
    context: Context,
    prevContext: Context,
  ) => boolean
  propsAreCssOverrides: true
  withProps?: DefaultProps
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>

type OmitInternals<Props extends {className?: string; theme?: object}> = Omit<
  Props,
  'className' | 'theme'
>

type GlamorousProps = {className?: string; theme?: object}

export interface GlamorousInterface
  extends HTMLComponentFactory,
    SVGComponentFactory,
    HTMLComponent,
    SVGComponent,
    DOMTagComponentFactory,
    SVGTagComponentFactory {
  // # Glamarous Component factories

  // Two overloads are needed per shape due to a union return of CSSProperties | SVGProperties
  // resulting in a loss of typesafety on function arguments

  // ## create a component factory from your own component

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, CSSProperties, DefaultProps>
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, SVGProperties, DefaultProps>

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: PropsAreCssOverridesGlamorousOptions<
      ExternalProps,
      Context,
      DefaultProps
    >,
  ): GlamorousComponentFactoryCssOverides<
    ExternalProps,
    CSSProperties,
    DefaultProps
  >
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: PropsAreCssOverridesGlamorousOptions<
      ExternalProps,
      Context,
      DefaultProps
    >,
  ): GlamorousComponentFactoryCssOverides<
    ExternalProps,
    SVGProperties,
    DefaultProps
  >
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> {}

export function withTheme<Props extends {theme: any}>(
  component: React.ComponentClass<Props>,
): React.ComponentClass<Omit<Props, 'theme'>>

export function withTheme<Props extends {theme: any}>(
  component: React.StatelessComponent<Props>,
): React.StatelessComponent<Omit<Props, 'theme'>>

export * from './named-built-in-glamorous-components'

declare const glamorous: GlamorousInterface

export default glamorous
