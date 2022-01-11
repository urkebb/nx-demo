import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticResourses {
  apiOrNot = [
    { label: 'Svi', value: '' },
    { label: 'Promobox', value: '&api=1' },
    { label: 'Custom', value: '&api=0' },
  ];
  apiOrNotProducts = [
    { label: 'Svi', value: '' },
    { label: 'Promobox', value: '&from_api=1' },
    { label: 'Custom', value: '&from_api=0' },
  ];
  sortOptions = [
    {
      title: 'Po aktivnosti rastuće',
      value: 'active_asc',
    },
    {
      title: 'Po aktivnosti opadajuće',
      value: 'active_desc',
    },
    {
      title: 'Po kategoriji rastuće',
      value: 'category_asc',
    },
    {
      title: 'Po kategoriji opadajuće',
      value: 'category_desc',
    },
    {
      title: 'Po nazivu rastuće',
      value: 'name_asc',
    },
    {
      title: 'Po nazivu opadajuće',
      value: 'name_desc',
    },
  ];
  userTypes = [
    { label: 'Svi', value: '' },
    { label: 'Kupci', value: '&role[]=2' },
    { label: 'Radnici', value: '&role[]=1&role[]=3' },
  ];
  status = [
    { label: 'Svi', value: '' },
    { label: 'Rešeni', value: '&status=1' },
    { label: 'Nerešeni', value: '&status=0' },
  ];
  sortMediaLibrary = [
    { label: 'Od najstarijeg fajla', value: '&sort_by=created_at&dir=asc' },
    { label: 'Od najnovijeg fajla', value: '&sort_by=created_at&dir=desc' },
  ];
}
