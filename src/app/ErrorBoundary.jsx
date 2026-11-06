import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5 text-center">
          <h1 className="h4 text-body mb-2">Что-то пошло не так</h1>
          <p className="text-body-secondary mb-4">Обновите страницу и попробуйте ещё раз.</p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Обновить
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
