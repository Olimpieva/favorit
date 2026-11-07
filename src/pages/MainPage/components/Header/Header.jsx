export const Header = () => {
  return (
    <header className="w-100 align-self-stretch d-flex flex-shrink-0 align-items-center bg-body text-body px-4 py-3">
      <div className="d-flex align-items-center gap-2 min-w-0">
        <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0 bg-primary text-black rounded-3 lh-1 p-1 fs-5">
          <i className="bi bi-fan" />
        </span>
        <span className="fw-semibold text-truncate fs-5">Гипермаркет автозапчастей</span>
      </div>
    </header>
  );
};
