import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobFormService from "../services/jobFormService";

export default function JobForms() {
    const [jobForms, setJobForms] = useState([]);

  useEffect(()=>{
      let jobFormService = new JobFormService()
      jobFormService.getJobForms().then(result=>setJobForms(result.data.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firma _Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Form Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobForms.map((jobForm) => (
            <Table.Row key={jobForm.id} >
              <Table.Cell>{jobForm.companyName}</Table.Cell>
              <Table.Cell>{jobForm.jobPositionName}</Table.Cell>
              <Table.Cell>{jobForm.jobDefinition}</Table.Cell>
              <Table.Cell>{jobForm.positionCount}</Table.Cell>
              <Table.Cell>{jobForm.formDate}</Table.Cell>
              <Table.Cell>{jobForm.formEndDate}</Table.Cell>
              <Table.Cell>{jobForm.cityName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
