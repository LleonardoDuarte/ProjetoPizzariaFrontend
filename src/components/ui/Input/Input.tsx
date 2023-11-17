import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "../Input/styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

//A propriedade ...rest serve para que se coloque o que se deseja de outros componentes como placeholder direto na importação do input e não aqui no componente pois se fosse por aquim ficaria engessado e todos os inputs teriam a mesma escrita colocada aqui, no caso para usar o rest no typescript como precisa de tipagem foi usado uma interface para reconhecer o inputHTMLAttributes para que ele tipe o rest e nao haja prolemas.

export default function input({ ...rest }: InputProps) {
  return (
    <>
      <input className={styles.input} {...rest} />
    </>
  );
}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <>
      <textarea className={styles.input} {...rest}></textarea>
    </>
  );
}
