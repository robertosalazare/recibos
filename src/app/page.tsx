import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { PageContent } from "./components/PageContent";

export default function Home() {
  return (
    <PageContent title="Generar recibo">
      <form className="grid grid-cols-2 gap-6">
        <Input label="De quien se recibio" />
        <Input label="Quien recibio" />
        <Input label="Cantidad recibida" />
        <Input label="Forma de pago" />
        <Input
          label="Concepto"
          containerClass="col-span-2"
          useTextarea
          rows={5}
        />
        <div className="flex w-full justify-end mt-6 col-span-2">
          <Button>Submit</Button>
        </div>
      </form>
    </PageContent>
  );
}
