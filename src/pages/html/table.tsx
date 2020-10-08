/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';

const TablePage: React.FC = () => {
  return (
    <TopicPage heading='Learning Table'>
      <div
        css={css`
          table {
            border-collapse: collapse;
            border: 3px solid black;
            table-layout: fixed;
            max-width: 100%;
            min-width: 300px;
          }

          th,
          td {
            border: 1px solid gray;
            padding: 0.5em;
            text-align: center;
          }

          thead th {
            border-bottom: 2px solid black;
          }

          tbody th,
          thead th:nth-child(1) {
            border: 2px solid black;
          }
        `}
      >
        <section>
          <h2>Basics</h2>
          <table>
            <tr>
              <td>Number</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Shawn</td>
            </tr>
          </table>
        </section>
        <section>
          <h2>Structured</h2>
          <table>
            <caption>Members information</caption>
            <colgroup
              css={css`
                col:nth-child(even) {
                  background-color: #efefef;
                }
              `}
            >
              <col></col>
              <col></col>
              <col></col>
              <col></col>
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Join</th>
                <th scope='col'>Height</th>
                <th scope='col'>Birthplace</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Shiraishi Mai</th>
                <td>1st</td>
                <td>162</td>
                <td>Gunma</td>
              </tr>
              <tr>
                <th scope='row'>Saito Asuka</th>
                <td>1st</td>
                <td>158</td>
                <td>Tokyo</td>
              </tr>
              <tr>
                <th scope='row'>Ikuta Erika</th>
                <td>1st</td>
                <td>160</td>
                <td>Düsseldorf, Germany</td>
              </tr>
              <tr>
                <th scope='row'>Terada Ranze</th>
                <td>2nd</td>
                <td>155</td>
                <td>Tokyo</td>
              </tr>
              <tr>
                <th scope='row'>Hori Miona</th>
                <td>2nd</td>
                <td>160</td>
                <td>Gifu</td>
              </tr>
              <tr>
                <th scope='row'>Iwamoto Renka</th>
                <td>3rd</td>
                <td>157</td>
                <td>Tokyo</td>
              </tr>
              <tr>
                <th scope='row'>Kubo Shiori</th>
                <td>3rd</td>
                <td>159</td>
                <td>Miyagi</td>
              </tr>
              <tr>
                <th scope='row'>Tsutsui Ayame</th>
                <td>4th</td>
                <td>160</td>
                <td>Aichi</td>
              </tr>
              <tr>
                <th scope='row'>Endo Sakura</th>
                <td>4th</td>
                <td>160</td>
                <td>Aichi</td>
              </tr>
              <tr>
                <th scope='row'>Kitagawa Yuri</th>
                <td>4th</td>
                <td>163</td>
                <td>California, US</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </TopicPage>
  );
};

export default TablePage;
