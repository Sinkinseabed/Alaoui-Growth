export default function ControlLiquidity() {
  return (
    <section
      className="controlLiquidity"
      aria-labelledby="control-liquidity-title"
    >
      <div className="controlLiquidity-glow" aria-hidden />
      <div className="controlLiquidity-inner">
        <h2 className="controlLiquidity-headline" id="control-liquidity-title">
          <span className="controlLiquidity-lineSans">
            IF YOU CONTROL ATTENTION,
          </span>
          <span className="controlLiquidity-lineSerif">
            YOU CONTROL LIQUIDITY.
          </span>
        </h2>

        <div className="controlLiquidity-footer">
          <div className="controlLiquidity-footerCopy">
            <p className="controlLiquidity-footerSans">READY TO ENGINEER</p>
            <p className="controlLiquidity-footerSerif">MOMENTUM?</p>
          </div>
          <button type="button" className="controlLiquidity-cta">
            Start Live Chat
          </button>
        </div>
      </div>
    </section>
  );
}
