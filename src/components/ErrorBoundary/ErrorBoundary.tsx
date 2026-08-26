import { Component, type ErrorInfo, type ReactNode } from 'react';

import styles from './ErrorBoundary.module.css';
import buttonStyles from '@styles/buttons.module.css';

import Button from '@components/Button/Button';

import { cx } from '@utils/classNames';

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { error: Error | null };

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Erro não tratado na interface:', error, info.componentStack);
  }

  render() {
    const { error } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Algo deu errado</h1>
        <p className={styles.message}>{error.message}</p>
        <Button
          className={cx(styles.button, buttonStyles.pill)}
          raised={false}
          shadow={false}
          onClick={() => window.location.reload()}
        >
          Recarregar a página
        </Button>
      </div>
    );
  }
}
