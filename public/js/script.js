let javascript = document.getElementById('javascript');
javascript.value =
  'multiply = (a, b) => a * b;\n\nconsole.log(multiply(29, 77));';

let javascriptOptions = {
  mode: 'javascript',
  lineNumbers: true,
  autofocus: true
};

let javascriptCodeMirror = CodeMirror.fromTextArea(
  javascript,
  javascriptOptions
);

function run() {
  let scriptText = javascriptCodeMirror.getValue('\n');
  let iframe = document.getElementById('result');
  let head = iframe.contentWindow.document.getElementsByTagName('head')[0];
  let script = iframe.contentWindow.document.createElement('script');
  script.id = 'scriptContainer';
  script.text = `${scriptText}`;
  script.type = 'text/javascript';
  head.appendChild(script);
  iframe.contentWindow.location.reload();
}

function clean() {
  javascriptCodeMirror.setValue('');
}
