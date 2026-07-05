interface OpenMailClientParams {
  subject: string;
  bodyLines: string[];
  recipient?: string;
  onClose?: () => void;
}

export const openMailClient = ({
  subject,
  bodyLines,
  recipient = 'CSIEacademic@gmail.com',
  onClose,
}: OpenMailClientParams) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyLines.join('\n'));

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

  const width = 500;
  const height = 600;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  window.open(
    gmailUrl,
    'gmailCompose',
    `width=${width.toString()},height=${height.toString()},left=${left.toString()},top=${top.toString()},resizable=yes,scrollbars=yes`,
  );

  if (onClose) {
    window.setTimeout(onClose, 500);
  }
};
