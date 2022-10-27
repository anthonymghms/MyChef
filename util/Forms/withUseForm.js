import { useForm } from "react-hook-form";

// eslint-disable-next-line
const withUseForm = (Component) => (props) => {
    const form = useForm();

    if (Component.prototype.render) {
        return <Component {...form} {...props} />
    }

    throw new Error(
        [
          "You passed a function component, `withUseForm` is not needed.",
          "You can `withUseForm` directly in your component.",
        ].join("\n")
      )
        
}

export default withUseForm;
