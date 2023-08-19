import Snackbar from '@mui/material/Snackbar';
import Alert, {AlertColor} from '@mui/material/Alert';


interface CustomAlertProps {
    open: boolean;
    onClose: () => void;
    message: string;
    severity: AlertColor;
    autoHideDuration?: number;
}

export default function Alertmessage({ open, onClose, message, severity, autoHideDuration = 3000,}: CustomAlertProps) {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Alert severity={severity} onClose={onClose}>
          {message}
        </Alert>
      </div>
    </Snackbar>
  )
}
