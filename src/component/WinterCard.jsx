import "./WinterCard.css";

const WinterCard = ({
  name,
  category,
  sizes,
  requestedQuantity,
  receivedQuantity,
  condition,
  priority,
  description,
}) => {
  const progress =
    requestedQuantity > 0
      ? Math.min((receivedQuantity / requestedQuantity) * 100, 100)
      : 0;

  const remaining = Math.max(
    requestedQuantity - receivedQuantity,
    0
  );

  return (
    <div className="winter-card">
      {/* Header */}
      <div className="winter-card__header">
        <div>
          <span className="winter-card__category">
            {category}
          </span>

          <h3 className="winter-card__title">
            {name}
          </h3>
        </div>

        <span
          className={`winter-card__priority winter-card__priority--${priority.toLowerCase()}`}
        >
          {priority}
        </span>
      </div>

      {/* Description */}
      <p className="winter-card__description">
        {description}
      </p>

      {/* Information */}
      <div className="winter-card__info">
        <div className="winter-card__info-item">
          <span>Condition</span>
          <strong>{condition}</strong>
        </div>

        <div className="winter-card__info-item">
          <span>Sizes</span>

          <div className="winter-card__sizes">
            {sizes.map((size) => (
              <span
                key={size}
                className="winter-card__size"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="winter-card__quantity">
        <div className="winter-card__quantity-header">
          <span>Collection Progress</span>

          <strong>
            {receivedQuantity} / {requestedQuantity}
          </strong>
        </div>

        <div className="winter-card__progress">
          <div
            className="winter-card__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="winter-card__quantity-footer">
          <span>
            {Math.round(progress)}% collected
          </span>

          <span>
            {remaining} remaining
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="winter-card__footer">
        <span>Requested</span>

        <strong>
          {requestedQuantity} items
        </strong>
      </div>
    </div>
  );
};

export default WinterCard;