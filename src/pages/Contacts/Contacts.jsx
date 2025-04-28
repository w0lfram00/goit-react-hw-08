import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectIsRefreshing } from "../../redux/auth/selectors";

function Contacts() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRefreshing) dispatch(fetchContacts());
  }, [dispatch, isRefreshing]);

  return (
    !isRefreshing && (
      <>
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
        {loading && <div>Loading....</div>}
        {error && <div>{error}</div>}
      </>
    )
  );
}

export default Contacts;
