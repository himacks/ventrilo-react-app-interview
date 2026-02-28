interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function SettingsDialog({ isOpen, onClose }: SettingsDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div
        className="settings-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="settings-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="settings-body">
          <div className="settings-section">
            <h3>Profile</h3>
            <div className="setting-row">
              <span className="setting-label">Display Name</span>
              <input
                type="text"
                className="setting-input"
                defaultValue="John Doe"
              />
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsDialog;
